# Sistema de Marcação de Consultas Médicas

👩‍⚕️👨‍⚕️📅 Aplicativo desenvolvido para a disciplina de Desenvolvimento Mobile com foco na marcação e gestão de consultas médicas com três perfis distintos de usuários.

## 📌 Informações do Aluno

- **Nome:** Lu Vieira Santos  
- **RM:** 558935

---

## 📱 Funcionalidades Principais

### 👤 Paciente

- Pode agendar novas consultas.
- Visualiza histórico de consultas.
- Interface personalizada para pacientes.

### 🩺 Médico

- Visualiza consultas agendadas.
- Pode confirmar ou cancelar consultas.
- Tela de perfil adaptada para médicos.

### 🧑‍💼 Administrador

- Acompanha as marcações de todo o sistema.
- Gerencia usuários e informações gerais.
- Interface dedicada para administradores.

---

## 🧠 Tecnologias Utilizadas

- **React Native** (com TypeScript)
- **React Navigation**
- **Context API** para controle de autenticação e perfil
- **AsyncStorage** para persistência local de dados
- **Estilização condicional** com base no tipo de usuário

---

## 💾 Persistência de Dados

As consultas e dados de login são armazenados localmente no dispositivo utilizando `@react-native-async-storage/async-storage`.

---

## 📂 Estrutura de Telas

- `LoginScreen.tsx`: Tela de login com seleção de tipo de usuário
- `ProfileScreen.tsx`: Exibição dinâmica do conteúdo conforme o perfil
- `AppointmentForm.tsx`: Formulário de agendamento de consulta
- `DoctorDashboard.tsx`: Gerenciamento de consultas (Médico) *(em desenvolvimento)*
- `AdminDashboard.tsx`: Visão geral do sistema (Administrador) *(em desenvolvimento)*

---

## 🚧 A melhorar

- Finalizar telas de Médico e Administrador.
- Adicionar autenticação real com backend (futuro).
- Melhorar UX e validações do formulário.

---

## 📸 Prints e Vídeo (opcional)

Adicione aqui imagens da aplicação rodando ou link para vídeo demonstrativo.

---

## ✅ Como Executar

```bash
# Instale as dependências
npm install

# Rode o projeto
npx expo start
