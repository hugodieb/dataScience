import pandas as pd
import json as js


def write_json(file):
  with open('teste.json', 'w', encoding="utf-8") as f:
    js.dump(file, f, ensure_ascii=False)
    f.close()

df = pd.read_excel("lista.xlsx")
print(df.head())

to_dict = df.to_dict(orient='records')
to_jason = js.dumps(to_dict, ensure_ascii=False)

write_json(to_jason)

print("sucess json")