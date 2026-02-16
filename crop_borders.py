from PIL import Image
import os
import glob

# Process all image types
images_to_check = []
for ext in ['*.png', '*.jpg', '*.jpeg']:
    images_to_check.extend(glob.glob(os.path.join("public", ext)))

def crop_black_borders(image_path):
    try:
        img = Image.open(image_path)
        bg = Image.new(img.mode, img.size, img.getpixel((0,0)))
        diff = Image.difference(img, bg)
        diff = Image.add(diff, diff, 2.0, -100)
        bbox = diff.getbbox()
        if bbox:
            # Check if the crop is significant (e.g. > 1% change)
            width, height = img.size
            c_width = bbox[2] - bbox[0]
            c_height = bbox[3] - bbox[1]
            
            if c_width < width or c_height < height:
                print(f"Cropping {image_path}: {width}x{height} -> {c_width}x{c_height}")
                original = img.crop(bbox)
                original.save(image_path)
                return True
        return False
    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        return False

count = 0
for img_path in images_to_check:
    # Only process if file name is numeric or one of the identified ones, to avoid over-cropping logos etc if they have transparency (though diff logic handles solid color)
    # Actually, the user complained about black borders. Let's look for BLACK borders specifically.
    try:
        img = Image.open(img_path)
        # Check corners. If corners are black, try to crop.
        # Simple method: getbbox() typically filters out *black* (0) if looking at difference from black.
        # But images might be RGB. 
        # Better: Convert to grayscale, threshold at very low value, find box.
        
        gray = img.convert("L")
        # Threshold: any pixel > 1 is "content". 
        # Inverts logic: Black is 0. 
        # We want to keep non-black.
        # getbbox() returns bounding box of non-zero regions.
        bbox = gray.getbbox()
        
        if bbox:
             # Check if we are cropping
            width, height = img.size
            if bbox != (0, 0, width, height):
                # Verify it's actually cropping black borders and not just transparent pixels if png
                # If image is RGB/RGBA, black is (0,0,0).
                # Only save if we actually crop something
                cropped = img.crop(bbox)
                cropped.save(img_path)
                print(f"Cropped black/transparent borders from {img_path}")
                count += 1
    except Exception as e:
        print(f"Skipping {img_path}: {e}")

print(f"Processed {len(images_to_check)} images. Cropped {count}.")
