def analyze_burmese_text(text: str):

    # -----------------------------------
    # TEMPORARY MOCK RESULTS
    # Replace with trained model later
    # -----------------------------------

    syllables = [
        "ကျွန်",
        "တော်",
        "မ",
        "နက်",
        "ဖြန်",
        "ကျောင်း",
        "သွား",
        "မယ်",
        "။",
    ]

    words = [
        "ကျွန်တော်",
        "မနက်ဖြန်",
        "ကျောင်း",
        "သွား",
        "မယ်",
        "။",
    ]

    pos_tags = [
        {
            "word": "ကျွန်တော်",
            "tag": "PRON"
        },
        {
            "word": "မနက်ဖြန်",
            "tag": "ADV"
        },
        {
            "word": "ကျောင်း",
            "tag": "NOUN"
        },
        {
            "word": "သွား",
            "tag": "VERB"
        },
        {
            "word": "မယ်",
            "tag": "AUX"
        },
        {
            "word": "။",
            "tag": "PUNCT"
        },
    ]

    unique_pos_tags = len({
        item["tag"]
        for item in pos_tags
    })

    return {
        "originalText": text,

        "syllables": syllables,

        "words": words,

        "posTags": pos_tags,

        "statistics": {
            "characters": len(text),
            "syllables": len(syllables),
            "words": len(words),
            "uniquePosTags": unique_pos_tags,
        },
    }