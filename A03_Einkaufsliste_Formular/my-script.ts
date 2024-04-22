namespace A03{

    interface Task {
        title: string;
        who: string;
        time: string;
        date: string;
        inProcess: boolean;
        comment: string;
    }
    
    const tasks: Task[] = []; // Array zur Speicherung der Aufgaben
    
    // DOM-Elemente abrufen
    const form = document.querySelector('form');
    const addButton = document.querySelector('button');
    const taskList = document.querySelector('div:last-child');
    
    // Aufgabe hinzufügen
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();
    
        const taskInput = document.querySelector('.task') as HTMLInputElement;
        const whoSelect = document.querySelector('.who') as HTMLSelectElement;
        const timeInput = document.querySelector('.time') as HTMLInputElement;
        const dateInput = document.querySelector('.date') as HTMLInputElement;
        const inProcessRadio = document.querySelector('.in_process') as HTMLInputElement;
        const notInProcessRadio = document.querySelector('.not_in_process') as HTMLInputElement;
        const commentInput = document.querySelector('.comment') as HTMLInputElement;
    
        const task: Task = {
            title: taskInput.value,
            who: whoSelect.value,
            time: timeInput.value,
            date: dateInput.value,
            inProcess: inProcessRadio.checked,
            comment: commentInput.value
        };
    
        tasks.push(task);
        renderTaskList();
        form.reset();
    });
    
    // Aufgabe löschen
    taskList.addEventListener('click', (event: Event) => {
        const deleteButton = event.target as HTMLButtonElement;
        const taskId = deleteButton.dataset.id;
        tasks.splice(parseInt(taskId), 1);
        renderTaskList();
    });
    
    // Aufgabenliste aktualisieren
    function renderTaskList() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskElement = document.createElement('div');
            taskElement.innerHTML = `
                <p><strong>${task.title}</strong></p>
                <p>Wer erledigt? ${task.who}</p>
                <p>Bis wann? ${task.time} ${task.date}</p>
                <p>In Bearbeitung? ${task.inProcess ? 'Ja' : 'Nein'}</p>
                <p>Kommentar: ${task.comment}</p>
                <button data-id="${index}">Löschen</button>
            `;
            taskList.appendChild(taskElement);
        });
    }
    
    // Add Button Text aktualisieren
    addButton.addEventListener('click', () => {
        addButton.textContent = 'Hinzufügen';
    });
    }
