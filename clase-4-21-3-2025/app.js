document.addEventListener("DOMContentLoaded", () => {
  const recognition = new webkitSpeechRecognition() || new SpeechRecognition()
  const startListeningButton = document.querySelector(".record")
  const tasksList = document.querySelector(".tasks")
  const API_BASE = "http://localhost:3000/api/notes"
  const searchInput = document.getElementById("search")
  const message = document.querySelector("p")

  let recognizing = false
  let allTasks = []

  recognition.continuous = true
  recognition.lang = "es"


  const toggleSpeechRecognition = () => {
    recognizing = !recognizing

    if (recognizing) {
      recognition.start()
      startListeningButton.innerHTML = '<i class="bx bx-loader bx-spin"></i>'
      startListeningButton.classList.add("recording")
    } else {
      recognition.stop()
      startListeningButton.innerHTML = '<i class="bx bx-microphone"></i>'
      startListeningButton.classList.remove("recording")
    }
  }

  const searchTasks = () => {
    const text = searchInput.value.toLowerCase()
    const filteredTasks = allTasks.filter(task => task.text.toLowerCase().includes(text))
    renderTasks(filteredTasks)
  }

  startListeningButton.addEventListener("click", toggleSpeechRecognition)
  searchInput.addEventListener("input", searchTasks)

  recognition.onresult = async (event) => {
    const text = event.results[event.results.length - 1][0].transcript
    const sanitizedText = text[0].toUpperCase() + text.substring(1) + "."
    await addTask(sanitizedText)
  }



  const renderTasks = (tasks) => {
    tasksList.innerHTML = ""

    tasks.forEach(task => {
      const { _id: id, done, text } = task

      const taskElement = document.createElement("li")

      taskElement.innerHTML =
        `
        <div>
          <input type="checkbox" id="${id}" ${done ? "checked" : ""}>
          <label for="${id}" ${done ? 'style="text-decoration: line-through;"' : ""}>${text}</label>
        </div>
        <button class="delete-task" data-id="${id}"><i class='bx bx-trash'></i></button>                
        `

      tasksList.appendChild(taskElement)

      const checkbox = taskElement.querySelector('input[type="checkbox"]')
      checkbox.addEventListener("change", () => updateTask(id, done))

      const deleteButton = taskElement.querySelector(".delete-task")
      deleteButton.addEventListener("click", () => deleteTask(id))
    });
  }

  const loadTasksFromAPI = async () => {
    try {
      const response = await fetch(API_BASE)
      allTasks = await response.json()
      renderTasks(allTasks)
      togleHideElements()
    } catch (error) {
      console.log("Error al cargar tareas:", error)
    }
  }

  function togleHideElements() {
    console.log(allTasks.length)
    if (allTasks.length > 0) {
      message.classList.add("hide")
      searchInput.classList.remove("hide")
    } else {
      message.classList.remove("hide")
      searchInput.classList.add("hide")
    }
  }

  const addTask = async (text) => {
    const task = {
      done: false,
      text
    }

    try {
      await fetch(API_BASE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
      })
      loadTasksFromAPI()
    } catch (error) {
      console.log("Error al agregar tarea:", error)
    }
  }

  const updateTask = async (id, done) => {
    try {
      await fetch(`${API_BASE}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ done: !done })
      })
      loadTasksFromAPI()
    } catch (error) {
      console.log("Error al actualizar tarea:", error)
    }
  }

  const deleteTask = async (id) => {
    if (confirm("Estas seguro que quieres borrar la tarea?")) {
      try {
        await fetch(`${API_BASE}/${id}`, {
          method: "DELETE"
        })
        loadTasksFromAPI()
      } catch (error) {
        console.log("Error al borrar tarea:", error)
      }
    }
  }

  loadTasksFromAPI()
})