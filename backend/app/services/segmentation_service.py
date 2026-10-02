from pathlib import Path
from transformers import pipeline


# ==========================================
# 1. Model path
# ==========================================

BACKEND_DIR = Path(__file__).resolve().parents[2]

MODEL_PATH = (
    BACKEND_DIR
    / "models"
    / "segmentation"
)


# ==========================================
# 2. Load model once
# ==========================================

print("Loading Burmese segmentation model...")

segmenter = pipeline(
    "token-classification",
    model=str(MODEL_PATH),
    tokenizer=str(MODEL_PATH),
    aggregation_strategy="simple",
    device=-1,
)

print("Burmese segmentation model loaded!")


# ==========================================
# 3. Raw model prediction
# ==========================================

def predict_segmentation(text: str):

    text = text.strip()

    if not text:
        return []

    predictions = segmenter(text)

    return predictions


# ==========================================
# 4. Remove BERT ## markers
# ==========================================

def clean_token(token: str) -> str:

    return token.replace("##", "")


# ==========================================
# 5. Convert B/I/O predictions into words
# ==========================================

def segment_text(text: str) -> list[str]:

    predictions = predict_segmentation(text)

    if not predictions:
        return []

    words = []

    current_word = ""

    for prediction in predictions:

        label = prediction["entity_group"]

        token = clean_token(
            prediction["word"]
        )

        if label == "B":

            if current_word:
                words.append(current_word)

            current_word = token

        elif label == "I":

            current_word += token

        elif label == "O":

            if current_word:
                words.append(current_word)
                current_word = ""

            if token.strip():
                words.append(token)

    if current_word:
        words.append(current_word)

    return words