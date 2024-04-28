## Documentação da API

#### Retorna os agendamentos pela data

```http
GET /schedules?date=2024-04-28
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `date` | `string` | data no formato ISO (YYYY-MM-DD) |

#### Criar um novo agendamento

```http
POST /schedules
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `client`      | `string` | **Obrigatório**. Nome do cliente |
| `date`      | `string` | **Obrigatório**. data no formato ISO (YYYY-MM-DD) |
| `time`      | `string` | **Obrigatório**. Horário do atendimento |

Requisição:
```json
{    
  "client": "Clodoaldo Dantas",
  "date": "2024-04-30",
  "time": "08:00"
}
```
