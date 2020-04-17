<template>
	<div class="wrap">
		<div v-if="users">
			<table class="users-table">
				<thead class="users-table__head">
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
					</tr>
				</thead>
				<router-link class="users-table__item" 
					v-for="user in users"
					tag="tr"
					:to="{name: 'User', params: {id: user.id, name: user.name}}"
					v-bind:key="user.id">
				<td>{{ user.name }}</td>
				<td>{{ user.email }}</td>
				<td>{{ user.phone }}</td>
			</router-link>
		</table>
		<Pagination :allPages="allPages" :currentPage="page" />
	</div>
	<div v-else>{{ status }}</div>
	{{ updateList }}
</div>
</template>

<script>
import Pagination from './Pagination.vue';

export default {
	name: 'UsersList',
	props: ['page'],
	data() {
		return {
			users: null,
			status: 'Loading...',
			inPage: 5,
			allPages: null
		}
	},
	components: {
		Pagination
	},
	computed: {
		updateList() {
			this.getUsersList();
		}
	},
	created() {
		this.getUsersList();
	},
	methods: {
		getUsersList(){
			fetch(`https://jsonplaceholder.typicode.com/users?_page=${this.page}&_limit=${this.inPage}`)
			.then(response => {
				let totalCount = response.headers.get('x-total-count');
				this.allPages = totalCount ? Math.ceil(totalCount / this.inPage) : '';

				return response.ok ? response.json() : '';
			})
			.then((result) => result ? this.users = result : this.status = 'Loading error...')
		}
	}
}
</script>

<style>
	.users-table{
		width: 100%;
		text-align: left;
		margin: 0 0 40px;
		table-layout: fixed;
	}
	.users-table__head{
		font-weight: bold;
		background: #292929;
		color: #fff;
	}
	.users-table__head th{
		padding: 10px;
	}
	.users-table td{
		padding: 10px;
	}
	.users-table__item{
		cursor: pointer;
		-webkit-transition: background ease .3s;
		-o-transition: background ease .3s;
		transition: background ease .3s;
	}
	.users-table__item:nth-child(odd){
		background: #efefef;
	}
	.users-table__item:hover{
		background: #dcdcdc;
	}
</style>