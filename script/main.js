"use strict";

class UserList {
  constructor(register, userList, userName) {
    this.register = document.getElementById(register);
    this.userList = document.getElementById(userList);
    this.userName = document.getElementById(userName);
    this.now = new Date();
    this.users = [];
  }

  renderList() {
    this.userList.textContent = "";
    this.users.forEach((item) => {
      this.createItem(item);
    });
    this.addToStorage();
  }

  createItem(item) {
    let li = document.createElement("li");
    li.key = item.key;
    li.classList.add("userItem");
    li.innerHTML = `Имя: ${item.firstName}, фамилия: ${item.lastName}, зарегистрирован: ${item.registered} 
    <button class="delete">Удалить пользователя</button>`;
    this.userList.append(li);
  }

  addToStorage() {
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  getFromStorage() {
    let reverse = JSON.parse(localStorage.getItem("users"));
    if (reverse !== null) {
      reverse.forEach((item) => {
        this.users.push(item);
      });
    }
  }

  addUser() {
    const now = new Date();
    const name = prompt("Enter Name", "Вася Тёркин");
    const login = prompt("Enter Login", "логин");
    const password = prompt("Enter Password", "пароль");
    const localeOptions = {
      day: "2-digit",
      year: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    this.users.push({
      firstName: name.slice(0, name.indexOf(" ")),
      lastName: name.slice(name.indexOf(" ")),
      login: login,
      password: password,
      registered: now.toLocaleString("ru", localeOptions),
      key: this.generateKey(),
    });
    this.renderList();
  }

  deleteUser(users, event) {
    const target = event.target.closest("li");
    users.forEach((user, index, arr) => {
      if (user.key === target.key) arr.splice(index, 1);
    });
  }

  loginUser(users) {
    if (this.users.length === 0) return;
    const login = prompt("Enter Login", "");
    const password = prompt("Enter Password", "");

    const user = users.find(
      (item) => item.login === login && item.password === password
    );
    if (user === undefined) {
      alert("User not found");
    } else {
      this.userName.textContent = user.firstName + "!";
    }
  }

  eventHandler() {
    this.register.addEventListener("click", this.addUser.bind(this));

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (target.matches(".delete")) {
        this.deleteUser(this.users, event);
        this.renderList();
      } else if (target.matches("#login")) {
        this.loginUser(this.users);
      }
    });
  }

  generateKey() {
    return (
      Math.random().toString(32).substring(2, 9) + (+new Date()).toString(32)
    );
  }

  init() {
    this.eventHandler();
    this.getFromStorage();
    this.renderList();
  }
}
let uList = new UserList("registerUser", "list", "username");
uList.init();
