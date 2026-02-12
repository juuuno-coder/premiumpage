import shutil
import os

brain_dir = "/Users/admin/.gemini/antigravity/brain/b62bd3fa-cc93-4c90-8722-af4f52b556b9"
target_dir = "/Users/admin/Desktop/jcatalog/public/templates/hangseong/images/products"
os.makedirs(target_dir, exist_ok=True)

# New Support Bracket Image (5 rings)
src_file = "media__1770865120989.png"
dst_file = "cooling_wide_bracket.png"  # Using .png extension

src_path = os.path.join(brain_dir, src_file)
dst_path = os.path.join(target_dir, dst_file)

if os.path.exists(src_path):
    shutil.copy(src_path, dst_path)
    print(f"✅ Successfully replaced {dst_file} with new image {src_file}")
else:
    print(f"❌ Source file {src_file} not found in {brain_dir}")
