## 📝 Documentação da API

#### Retorna os agendamentos pela data

```http
GET /schedules?date=2024-04-28
```

| Parâmetro | Tipo     | Descrição                        |
| :-------- | :------- | :------------------------------- |
| `date`    | `string` | data no formato ISO (YYYY-MM-DD) |

#### Criar um novo agendamento

```http
POST /schedules
```

| Parâmetro | Tipo     | Descrição                                         |
| :-------- | :------- | :------------------------------------------------ |
| `client`  | `string` | **Obrigatório**. Nome do cliente                  |
| `date`    | `string` | **Obrigatório**. data no formato ISO (YYYY-MM-DD) |
| `time`    | `string` | **Obrigatório**. Horário do atendimento           |

Requisição:

```json
{
  "client": "Clodoaldo Dantas",
  "date": "2024-04-30",
  "time": "08:00"
}
```

### 💻 Como executar o projeto

1. Certifique-se de ter o Node instalado na sua máquina.
2. Clone o repositório.
3. Navegue até o diretório raiz do projeto.
4. Preencha as variáveis de ambiente de acordo com o arquivo `.env.example`
5. Execute o comando `npm install` para instalar as dependências do projeto.
6. Execute o comando `npm run start:dev` para iniciar o servidor de desenvolvimento.
7. Acesse o projeto em seu navegador através do endereço `http://localhost:3000`.
