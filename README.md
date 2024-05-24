### Esercizio - Boolzapp

Questo esercizio consiste nella creazione di una replica di una chat simile a WhatsApp utilizzando HTML, CSS e Vue.js. Il progetto è diviso in diverse milestone che guidano lo sviluppo delle funzionalità principali della chat, dalla visualizzazione dei contatti e dei messaggi, fino alla possibilità di aggiungere, rispondere e cancellare messaggi.

## Milestone 1

**Obiettivo:** Creare la struttura base della chat e visualizzare dinamicamente i contatti.

- **Replica della Grafica:**
  - Creare una grafica simile a WhatsApp, con una sezione per la lista dei contatti e una sezione per la conversazione.
  - Differenziare i messaggi scritti dall’utente (in verde) e quelli dell’interlocutore (in bianco) utilizzando due classi CSS diverse.

- **Lista Contatti Dinamica:**
  - Utilizzare la direttiva `v-for` di Vue.js per visualizzare dinamicamente i contatti.
  - Ogni contatto deve mostrare il nome e un'immagine.

## Milestone 2

**Obiettivo:** Visualizzare i messaggi relativi al contatto attivo e permettere di cambiare conversazione.

- **Messaggi Dinamici:**
  - Utilizzare `v-for` per visualizzare tutti i messaggi del contatto attivo nella sezione della conversazione.
  - I messaggi devono essere aggiornati dinamicamente quando si clicca su un contatto diverso.

- **Clic sul Contatto:**
  - Implementare un evento di click su ciascun contatto che permette di visualizzare la conversazione corrispondente al contatto cliccato.

## Milestone 3

**Obiettivo:** Permettere all'utente di aggiungere messaggi e ricevere risposte automatiche.

- **Aggiunta di un Messaggio:**
  - Creare un input nella parte bassa della chat dove l’utente può scrivere un messaggio.
  - Quando l’utente preme "enter", il messaggio viene aggiunto al thread come messaggio verde.

- **Risposta Automatica:**
  - Ogni volta che l’utente invia un messaggio, dopo 1 secondo riceve una risposta automatica con il testo "ok".
  - La risposta appare come un messaggio dell’interlocutore (in bianco).

## Milestone 4

**Obiettivo:** Implementare la funzionalità di ricerca dei contatti.

- **Ricerca Utenti:**
  - Creare un input di ricerca nella parte sinistra, sopra la lista dei contatti.
  - Quando l’utente digita qualcosa nell’input, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite.
  - Ad esempio, scrivendo “mar” rimangono solo i contatti con nomi come Marco e Martina.

## Milestone 5 (Opzionale)

**Obiettivo:** Aggiungere funzionalità avanzate per la gestione dei messaggi.

- **Cancella Messaggio:**
  - Implementare un menu a tendina che appare cliccando su un messaggio.
  - Il menu permette di cancellare il messaggio selezionato.

- **Visualizzazione Ora e Ultimo Messaggio:**
  - Mostrare l’ora di invio/recezione di ogni messaggio.
  - Nella lista dei contatti, visualizzare l’ultimo messaggio inviato/ricevuto per ciascun contatto.

### Svolgimento del Progetto

1. **Creazione del Markup e Stili di Base:**
   - Impostare l’HTML e il CSS per la struttura della chat e i diversi stili per i messaggi dell’utente e dell’interlocutore.

2. **Implementazione di Vue.js:**
   - Creare un'istanza Vue e configurare i dati iniziali, inclusi i contatti e i messaggi.
   - Utilizzare `v-for` per rendere dinamici i contatti e i messaggi.

3. **Gestione degli Eventi:**
   - Aggiungere eventi di click sui contatti per aggiornare la conversazione attiva.
   - Gestire l'evento di invio del messaggio e la risposta automatica.

4. **Ricerca e Filtraggio:**
   - Implementare la funzionalità di ricerca per filtrare i contatti in base all’input dell’utente.

5. **Funzionalità Avanzate (Bonus):**
   - Aggiungere la possibilità di cancellare i messaggi.
   - Visualizzare l’ora dei messaggi e l’ultimo messaggio nella lista dei contatti.

Questo esercizio è utile per praticare la manipolazione del DOM, la gestione degli eventi, e l'uso di framework come Vue.js per creare applicazioni web interattive.

## Link preview
https://lorenzorossini01.github.io/vue-boolzapp/
