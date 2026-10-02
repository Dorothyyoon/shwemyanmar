from app.services.segmentation_service import (
    predict_segmentation,
    segment_text,
)


text = "မြန်မာနိုင်ငံသည်လှပသောနိုင်ငံဖြစ်သည်။"


print("=" * 50)
print("SEGMENTATION SERVICE TEST")
print("=" * 50)


# ==========================================
# Raw predictions
# ==========================================

predictions = predict_segmentation(text)

print("\nInput:")
print(text)

print("\nRaw model predictions:")

for prediction in predictions:
    print(prediction)


# ==========================================
# Reconstructed words
# ==========================================

words = segment_text(text)

print("\nSegmented words:")

for word in words:
    print(f"[{word}]")


print("\nWord list:")
print(words)