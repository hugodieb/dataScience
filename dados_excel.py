import pandas as pd
import json as js


def write_json(file):
	with open('dados.json', 'w') as f:
		js.dump(file, f)


df = pd.read_excel("lista.xlsx")
print(df.head())

to_dict = df.to_dict(orient='records')
to_jason = js.dumps(to_dict)

write_json(to_jason)
print("sucess json")