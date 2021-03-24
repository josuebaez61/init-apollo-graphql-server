# Proyecto de iniciación con Apollo & GraphQL

Para instalar los node_modules ``` npm install ```.  Entonces para iniciar en development mode ``` npm run start:dev ```.

## Test

Existe una query definida para obtener un array de usuarios:

```
{
	users{
    name,
    age
  }
}
```

### Respuesta:

```
{
  "data": {
    "users": [
      {
        "name": "Ada",
        "age": 25
      },
      {
        "name": "Marcus",
        "age": 18
      },
      {
        "name": "Rose",
        "age": 30
      },
      {
        "name": "Adam",
        "age": 20
      },
      {
        "name": "Paul",
        "age": 31
      },
      {
        "name": "Anna",
        "age": 26
      }
    ]
  }
}
```