# 🌱 EcoGame

EcoGame é um aplicativo web gamificado inspirado no estilo Duolingo, criado para ensinar sustentabilidade, reciclagem e energia renovável de forma interativa.

Link do projeto funcionando -> https://ecogame-lzzru17ag-marcela-barrosos-projects.vercel.app/

O projeto foi desenvolvido como trabalho acadêmico utilizando:

- Next.js
- TypeScript
- TailwindCSS
- Firebase Authentication
- Firestore Database

---

#  Funcionalidades

✅ Sistema de Login e Cadastro  
✅ Recuperação de senha  
✅ Perfil do usuário  
✅ Ranking global  
✅ Sistema de XP e níveis  
✅ Sistema de vidas ❤️  
✅ Timer ⏱  
✅ Streak 🔥  
✅ Feedback visual e sonoro  
✅ Perguntas por categoria  
✅ Perguntas por dificuldade  
✅ Interface moderna estilo game/Duolingo  
✅ Responsivo para mobile

---

#  Tecnologias

- Next.js
- React
- TypeScript
- TailwindCSS
- Firebase
- Framer Motion

---

#  Como executar o projeto

## 1. Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/ecogame.git
```

## 2. Entre na pasta

```bash
cd ecogame
```

## 3. Instale as dependências

Isso é muito importante:
Depois de baixar o repositório na sua máquina, exclua os seguintes arquivos:

- .next
- node_modules
- package-lock.jason 

e depois no terminal execute o npm install para reinstalá-las, se não fizer isso, não vai funcionar

## 4. Configure o Firebase
O projeto fui criado usando o Firebase, caso não queira usá-lo pode usar outro, mas precisa de um banco para fazer o cadastro de usuário,
A estrutura é essa:

Usuário(User)
- id
- nickname
- email
- senha
- nível
- XP

A senha é salva de uma maneira diferente, cada sistema de banco de dados faz de uma forma, mas no Firebase é bem simples, uma lida básica na documentação e irá entender !  

Aproveite o projeto para aprender !

Crie um arquivo `.env.local`

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

---

#  Executar o projeto

```bash
npm run dev
```

Depois abra:

```txt
http://localhost:3000
```

---

#  Estrutura do Projeto

```txt
/app
/components
/features
/services
/types
/utils
/data
```

---

#  Preview

Adicionar screenshots futuramente.

---

#  Autor

Desenvolvido por MARCELA SAMILI SANTOS BARROSO.
