<template>
	<div class="wrap">
		<a class="back" href="#" @click="$router.go(-1)">< Back</a>
		<h1>{{ name }}</h1>
		<ul v-if="todos" class="todo-list">
			<li class="todo-list__item" 
					v-for="todo in todos"
					v-bind:key="todo.id">
				<span class="todo-list__item-name">{{ todo.title }}</span>
				<span v-if="todo.completed" class="todo-list__item-status completed">Completed</span>
				<span v-else class="todo-list__item-status">Not completed</span>
			</li>
		</ul>
		<div v-else>{{ status }}</div>
	</div>
</template>

<script>
export default {
	name: 'User',
	props: ['id', 'name'],
	data() {
		return {
			todos: null,
			status: 'Loading...'
		}
	},
	created() {
		this.getUser()
	},
	methods: {
		getUser(){
			fetch(`https://jsonplaceholder.typicode.com/todos?userId=${this.id}`)
			.then(response => response.ok ? response.json() : '')
			.then(result => result ? this.todos = result : this.status = 'Loading error...')
		}
	}
}
</script>

<style>
	.back{
		color: #000;
		font-size: 18px;
		text-decoration: none;
	}
	.back:hover{
		text-decoration: underline;
	}
	h1{
		font-size: 30px;
		font-weight: bold;
		line-height: normal;
		margin: 20px 0;
	}
	.todo-list{
		font-size: 16px;
		line-height: 26px;
	}
	.todo-list__item{
		display: flex;
    align-items: center;
    justify-content: space-between;
		margin: 0 0 5px;
	}
	.todo-list__item-status{
		font-weight: bold;
		display: inline-block;
		font-size: 14px;
		border-radius: 4px;
		background: #dc3545;
		line-height: 21px;
		padding: 1px 7px 0;
		color: #fff;
		margin: 0 0 0 10px;
	}
	.todo-list__item-status.completed{
		background: #28a745;
	}

</style>