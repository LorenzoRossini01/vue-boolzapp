const { createApp } = Vue;

const DateTime = luxon.DateTime;
console.log(DateTime);

createApp({
  data() {
    return {
      contacts: [
        {
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
      activeChat: 0,
      newMessage: {
        date: this.getCurrentTime(),
        message: "",
        status: "sent",
      },
      searchBar: "",

      messageDropdown: {
        show: false,
        index: 0,
      },
    };
  },

  computed: {
    thisActiveChat() {
      return this.contacts[this.activeChat];
    },
  },

  methods: {
    goToChat(index) {
      this.activeChat = index;
    },

    getLastAccessFromMessages(messages) {
      if (!messages) return "";
      const receivedMessages = messages.filter(
        (message) => message.status == "received"
      );
      const lastMessage = receivedMessages.at(-1);

      return lastMessage ? this.formatDate(lastMessage.date) : "";
    },

    getLastMessageFromMessages(messages) {
      if (!messages) return;
      const lastMessage = messages.at(-1);
      return lastMessage ? lastMessage.message : "";
    },

    getCurrentTime() {
      const now = new Date();

      const day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
      const month =
        now.getMonth() + 1 < 10
          ? "0" + (now.getMonth() + 1)
          : now.getMonth() + 1;
      const year = now.getFullYear();
      const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
      const minutes =
        now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
      const second =
        now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();

      return `${day}/${month}/${year} ${hour}:${minutes}:${second}`;
    },

    formatDate(date) {
      const messageDate = DateTime.fromFormat(date, "dd/MM/yyyy HH:mm:ss");
      const messageDateText = messageDate.toLocaleString(DateTime.TIME_SIMPLE);
      return messageDateText;
    },

    sendMessage() {
      if (!this.newMessage.message) return;
      const newMessageCopy = this.newMessage;
      this.thisActiveChat.messages.push(newMessageCopy);
      this.newMessage = {
        date: this.getCurrentTime(),
        message: "",
        status: "sent",
      };

      setTimeout(this.ContactResponse, 1000);
    },

    ContactResponse() {
      const newContactMessageCopy = {
        date: this.getCurrentTime(),
        message: "ok",
        status: "received",
      };
      this.thisActiveChat.messages.push(newContactMessageCopy);
    },

    showDropdown(messIndex) {
      this.messageDropdown.index = messIndex;
      this.messageDropdown.show = !this.messageDropdown.show;
    },

    hideDropdownList() {
      this.messageDropdown.show = false;
    },

    delateMessage(i) {
      this.thisActiveChat.messages.splice(i, 1);
    },
  },
}).mount("#app");
