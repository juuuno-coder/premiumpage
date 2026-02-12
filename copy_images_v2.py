from PIL import Image
import os
import shutil

base_dir = "/Users/admin/.gemini/antigravity/brain/b62bd3fa-cc93-4c90-8722-af4f52b556b9"
out_dir = "/Users/admin/Desktop/jcatalog/public/templates/hangseong/images/products"
os.makedirs(out_dir, exist_ok=True)

# Map uploaded files to target names
# 961 -> Case (From visual check, it has 4 case parts)
# 958 -> Bracket? (Assuming based on diff)
files = {
    "media__1770861004961.jpg": "hvac_wide_case.jpg", 
    "media__1770861004958.jpg": "hvac_wide_bracket.jpg"
}

for src, dst_name in files.items():
    src_path = os.path.join(base_dir, src)
    if os.path.exists(src_path):
        try:
            shutil.copy(src_path, os.path.join(out_dir, dst_name))
            print(f"✅ Copied {dst_name}")
        except Exception as e:
            print(f"❌ Error copying {dst_name}: {e}")
    else:
        print(f"⚠️ Source file not found: {src}")
