<template>
  <div id="app">
    <h1 v-text="message"></h1> 
    <h3>{{message}}</h3>
    <ol>
    <li v-for="todo in todos" v-bind:class=" {finished:todo.isFinished}" v-on:click="toFinish(todo)">
      {{ todo.text }}
    </li>
  </ol>
  <input type="text" v-model="newTodo" v-on:keyup.enter="addTodo">
  </div>
</template>

<script>
import Store from './store.js'
export default {
  name: 'app',
  data: function () {
    return {
      message: '我的Todo List',
      todos: Store.fetch() || [],
      newTodo: ''
    }
  },
  watch: {
    todos: {
      handler: function (todos) {
        Store.save(todos)
      },
      deep: true
    }
  },
  methods: {
    toFinish: function (todo) {
      todo.isFinished = !todo.isFinished
    },
    addTodo: function () {
      alert(this.todos)
      this.todos.push({
        text: this.newTodo,
        isFinished: false
      })
      this.newTodo = ''
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ol{
  width: 100px;
  margin:0 auto;
  text-align: left;
}
.finished{
  text-decoration:underline;
  color:green;
  font-weight:bold;
  

}
</style>
