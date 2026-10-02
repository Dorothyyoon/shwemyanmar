from pathlib import Path

from transformers import (
    AutoTokenizer,
    AutoModelForTokenClassification,
)


BASE_DIR = Path(__file__).resolve().parent

MODEL_PATH = (
    BASE_DIR
    / "models"
    / "segmentation"
)


print("=" * 50)
print("SHWE MYANMAR SEGMENTATION MODEL TEST")
print("=" * 50)

print("\nModel path:")
print(MODEL_PATH)


print("\nLoading tokenizer...")

tokenizer = AutoTokenizer.from_pretrained(
    MODEL_PATH
)

print("Tokenizer loaded successfully!")


print("\nLoading segmentation model...")

model = AutoModelForTokenClassification.from_pretrained(
    MODEL_PATH
)

print("Segmentation model loaded successfully!")


print("\nModel labels:")

print(model.config.id2label)