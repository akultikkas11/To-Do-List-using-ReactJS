# To-Do List using ReactJS
A lightweight and intuitive **To-Do List** application built using **ReactJS**, designed to manage daily tasks with ease. This project demonstrates key React concepts such as component-based architecture, state management with hooks, event handling, and localStorage integration for persistent data.

## 🚀 Live Demo

**Live at:** [https://akultikkas11.github.io/To-Do-List-using-ReactJS/](https://akultikkas11.github.io/To-Do-List-using-ReactJS/)

## 📌 Features

- ✅ Add new tasks
- 🗑️ Delete tasks
- ✏️ Edit existing tasks
- ☑️ Mark tasks as completed
- 💾 Data persistence using localStorage
- 🧠 Input validation to prevent empty task entries
- 🔄 Real-time dynamic rendering

## 🧪 Testing Guidance

Follow these steps to manually test the core features of the To-Do List app:

### ➕ Add a Task
1. Type a task name in the input box.
2. Click the **Add** button.
3. Verify the task appears in the list.
4. Empty task cannot be added in list

### ✅ Mark Task as Complete
1. Click the **checkbox** next to a task to mark it as complete.
2. ✅ Verify the task is struck through.

### ✏️ Edit a Task
1. Click the **edit (✏️)** icon next to a task.
2. Modify the task text.
3. Click the **save (💾)** icon to update it.
4. ✅ Verify the updated text is saved.

### ❌ Delete a Task
1. Click the **delete (🗑️)** icon next to a task.
2. ✅ Verify the task is removed from the list.

### 💾 Test Persistence (localStorage)
1. Add one or more tasks.
2. Refresh the page.
3. ✅ Verify the tasks remain in the list after reload.