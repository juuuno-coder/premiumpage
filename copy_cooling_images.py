import shutil
import os

base_dir = "/Users/admin/.gemini/antigravity/brain/b62bd3fa-cc93-4c90-8722-af4f52b556b9"
out_dir = "/Users/admin/Desktop/jcatalog/public/templates/hangseong/images/products"
os.makedirs(out_dir, exist_ok=True)

# File mappings
# cooling_wide_case.jpg -> media__1770863340958.jpg (Drawing Motor Case - 4 parts)
# cooling_wide_bracket.jpg -> media__1770863065102.jpg (Support Bracket - 5 rings)

files = {
    "hvac_drawing_case.jpg": "media__1770863340958.jpg", # Renaming to hvac_drawing_case or better cooling_wide_case
    "hvac_support_bracket.jpg": "media__1770863065102.jpg"
}
# Actually let's stick to the convention: cooling_wide_case.jpg and cooling_wide_bracket.jpg

mappings = [
    ("media__1770863340958.jpg", "cooling_wide_case.jpg"),
    ("media__1770863065102.jpg", "cooling_wide_bracket.jpg")
]

for src_name, dst_name in mappings:
    src_path = os.path.join(base_dir, src_name)
    dst_path = os.path.join(out_dir, dst_name)
    
    if os.path.exists(src_path):
        shutil.copy(src_path, dst_path)
        print(f"✅ Copied {src_name} to {dst_name}")
    else:
        print(f"❌ Source file {src_name} not found.")
        # Fallback logic if needed (e.g., check other recent files)
