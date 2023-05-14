import openai

openai.api_key = "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"

def get_completion(prompt, model="gpt-3.5-turbo"):
    response = openai.ChatCompletion.create(
        model=model,
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ],
    )
    return response['choices'][0]['message']['content']

print(get_completion("Hola buenos dias chat"))
