'use strict';

// Importa la libreria DateTime da Luxon
const { DateTime } = luxon;
// Importa la funzione createApp da Vue
const { createApp } = Vue;

const myApp = createApp({
    data() {
        return {
            activeContact: undefined, // Indice del contatto attualmente attivo
            newMessage: '', // Input per i nuovi Messaggi
            keyWord: '', // Parola chiave per la ricerca dei contatti
            // Risposte del computer
            quotes: [
                "👍", "👀", "😂", "😒", "😢", "♥", "🙏", "😍", "🤨", "🙄",
                "😯", "😴", "😓", "😕", "🙃", "😶", "😤", "🤯", "🤪", "🥴",
                "😱", "😡", "💀", "👽", "💩", "💪", "🤏", "🤙", "💅", "👋",
                "🃏", "🚨", "🎁", "🤡", "🎄", "🤷‍♂️", "⁉", "OwO", ";-)", "ᓚᘏᗢ",
            ],
            // Dati dell'utente
            user: {
                name: 'Sofia',
                avatar: 'img/avatar_io.jpg',
                // Lista dei contatti
                contacts: [
                    {
                        name: 'Michele',
                        avatar: 'img/avatar_1.jpg',
                        visible: true,
                        status: '',
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Hai portato a spasso il cane?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Ricordati di stendere i panni',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Fabio',
                        avatar: 'img/avatar_2.jpg',
                        visible: true,
                        status: '',
                        messages: [
                            {
                                date: '20/03/2020 16:30:00',
                                message: 'Ciao come stai?',
                                status: 'sent'
                            },
                            {
                                date: '20/03/2020 16:30:55',
                                message: 'Bene grazie! Stasera ci vediamo?',
                                status: 'received'
                            },
                            {
                                date: '20/03/2020 16:35:00',
                                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                status: 'sent'
                            }
                        ],
                    },
                    {
                        name: 'Samuele',
                        avatar: 'img/avatar_3.jpg',
                        visible: true,
                        status: '',
                        messages: [
                            {
                                date: '28/03/2020 10:10:40',
                                message: 'La Marianna va in campagna',
                                status: 'received'
                            },
                            {
                                date: '28/03/2020 10:20:10',
                                message: 'Sicuro di non aver sbagliato chat?',
                                status: 'sent'
                            },
                            {
                                date: '28/03/2020 16:15:22',
                                message: 'Ah scusa!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Alessandro B.',
                        avatar: 'img/avatar_4.jpg',
                        visible: true,
                        status: '',
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Lo sai che ha aperto una nuova pizzeria?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Si, ma preferirei andare al cinema',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Alessandro L.',
                        avatar: 'img/avatar_5.jpg',
                        status: '',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ricordati di chiamare la nonna',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Va bene, stasera la sento',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Claudia',
                        avatar: 'img/avatar_6.jpg',
                        visible: true,
                        status: '',
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao Claudia, hai novità?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Non ancora',
                                status: 'received'
                            },
                            {
                                date: '10/01/2020 15:51:00',
                                message: 'Nessuna nuova, buona nuova',
                                status: 'sent'
                            }
                        ],
                    },
                    {
                        name: 'Federico',
                        avatar: 'img/avatar_7.jpg',
                        visible: true,
                        status: '',
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Davide',
                        avatar: 'img/avatar_8.jpg',
                        visible: true,
                        status: '',
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                                status: 'received'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:51:00',
                                message: 'OK!!',
                                status: 'received'
                            }
                        ],
                    }
                ]
            },
        };
    },

    /*     mounted() {
            this.user.contacts.forEach((contact, index) => {
                const lastMessageReceivedTime = this.getLastMessageReceivedTime(index);
                this.updateStatus(`Ultimo accesso alle ${lastMessageReceivedTime}`);
            });
        }, */

    methods: {
        // Restituisce il testo troncato e la data formattata dell'ultimo messaggio nella chat di un contatto, 
        getLastMessage(contact) {
            if (contact && contact.messages && contact.messages.length > 0) {
                const lastMessage = contact.messages[contact.messages.length - 1];

                const lastDate = DateTime.fromFormat(lastMessage.date, 'dd/MM/yyyy HH:mm:ss');
                let truncatedMessage = lastMessage.message;
                if (lastMessage.message.length > 25) {
                    truncatedMessage = lastMessage.message.slice(0, 22) + '...';
                }
                return { time: lastDate.toFormat('HH:mm'), message: truncatedMessage };
            }
            return { time: '', message: '' };
        },

        // Ottiene l'orario dell'ultimo messaggio ricevuto
        getLastMessageReceivedTime() {
            if (this.activeContact !== undefined) {
                const receivedMessages = this.filterContacts()[this.activeContact].messages
                    .filter(message => message.status === 'received');

                const lastReceivedMessage = receivedMessages.slice(-1)[0];

                if (lastReceivedMessage) {
                    const luxonDate = DateTime.fromFormat(lastReceivedMessage.date, 'dd/MM/yyyy HH:mm:ss');
                    return luxonDate.toFormat('HH:mm');
                }
            }
            return '';
        },
        /*         getLastMessageReceivedTime(index) {
                    const receivedMessages = this.user.contacts[index].messages.filter(message => message.status === 'received');
                    const lastReceivedMessage = receivedMessages.slice(-1)[0];
        
                    if (lastReceivedMessage) {
                        const luxonDate = DateTime.fromFormat(lastReceivedMessage.date, 'dd/MM/yyyy HH:mm:ss');
                        return luxonDate.toFormat('HH:mm');
                    }
                }, */


        // Filtra i contatti in base alla parola chiave inserita nell'input di ricerca
        filterContacts() {
            if (this.keyWord.trim() !== '') {
                return this.user.contacts
                    .filter((contact) =>
                        contact.name.toLowerCase().includes(this.keyWord.toLowerCase())
                    );
            } else {
                return this.user.contacts;
            }
        },

        // Cambia l'indice del contatto attivo
        changeActiveContact(index) {
            if (this.activeContact !== index) {
                this.activeContact = index;
            }
            return this.activeContact;
        },

        // Formatta la data del messaggio usando Luxon
        formatMessageDate(dateTime) {
            const luxonDate = DateTime.fromFormat(dateTime, 'dd/MM/yyyy HH:mm:ss');
            return luxonDate.toFormat('HH:mm');
        },

        // Seleziona randomicamente un messaggio nell'array di risposte
        getRandomQuote() {
            const randomQuote = Math.floor(Math.random() * this.quotes.length);
            return this.quotes[randomQuote];
        },

        // Aggiorna lo stato del contatto
        updateStatus(newStatus) {
            if (this.activeContact !== undefined) {
                this.user.contacts[this.activeContact].status = newStatus;
            }
        },

        // Simula una risposta al messaggio
        simulateResponse(contactIndex) {
            const now = DateTime.local();
            const randomQuote = this.getRandomQuote();
            this.user.contacts[contactIndex].messages.push({
                date: now.toFormat('dd/MM/yyyy HH:mm:ss'),
                message: randomQuote,
                status: 'received'
            });
        },

        // Aggiunge un nuovo messaggio contenente al testo digitato nell'input della chat con il contatto
        addMessage() {
            if (this.newMessage.trim() !== '' && this.activeContact !== undefined) {
                const contactIndex = this.user.contacts.indexOf(this.filterContacts()[this.activeContact]);
                const now = DateTime.local();

                this.user.contacts[contactIndex].messages.push({
                    date: now.toFormat('dd/MM/yyyy HH:mm:ss'),
                    message: this.newMessage,
                    status: 'sent',
                });

                // Dopo 1 secondo cambia lo stato del contatto
                setTimeout(() => {
                    this.updateStatus('Online');
                    // Dopo 1 secondo cambia lo stato del contatto
                    setTimeout(() => {
                        this.updateStatus('Sta scrivendo...');
                        // Dopo 3 secondi simula una risposta e cambia lo stato del contatto
                        setTimeout(() => {
                            this.updateStatus('Online');
                            this.simulateResponse(contactIndex);
                            // Dopo 1 secondo cambia lo stato del contatto
                            setTimeout(() => {
                                this.updateStatus(`Ultimo accesso alle ${now.toFormat('HH:mm')}`);
                            }, 1000);
                        }, 3000);
                    }, 1000);
                }, 1000);

            }
            this.newMessage = '';
        },

        // Cancella un messaggio contenuto nella chat con il contatto
        deleteMessage(contactIndex, messageIndex) {
            if (this.user.contacts[contactIndex] && this.user.contacts[contactIndex].messages[messageIndex]) {
                this.user.contacts[contactIndex].messages.splice(messageIndex, 1);
            }
        },

    },
}).mount('#app');