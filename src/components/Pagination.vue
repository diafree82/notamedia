<template>
	<div v-if="allPages" class="pagination">

		<router-link
			v-if="currentPage > 1"
			tag="a"
			:to="{name: 'Index', params: {page: currentPage - 1}}">
			< Prev</router-link>
		
		<router-link
			tag="a"
			v-for="(page,index) in allPages"
			v-bind:key="index"
			:to="{name: 'Index', params: {page: ++index}}"
		>{{ index }}</router-link>

		<router-link
			v-if="currentPage != allPages"
			tag="a"
			:to="{name: 'Index', params: {page: currentPage ? currentPage + 1 : 2}}">
			Next ></router-link>

		<!-- <a
			v-if="currentPage > 1"
			@click="getPage($event, null, 'prev')"
		class="pagination__button"
		href="#">< Back</a>
		<a
			v-for="(page, index) in allPages"
			v-bind:key="++index"
			@click="getPage($event, index)"
			v-bind:class="[ currentPage == index ? curentClass : '' ]"

		href="#">{{ index }}</a>
		<a
			v-if="currentPage != allPages"
			@click="getPage($event, null, 'next')"
		class="pagination__button"
		href="#">Forward ></a> -->

	</div>
</template>

<script>
export default {
	name: 'Pagination',
	props: ['allPages', 'currentPage']
}
</script>

<style>

	.pagination{
		display: flex;
		align-items: flex-start;
		justify-content: center;
	}
	.pagination a{
		color: #000;
		line-height: normal;
		border: #efefef 1px solid;
		border-radius: 4px;
		padding: 10px 15px;
		text-decoration: none;
		margin: 0 5px;
	}
	.pagination__button{
		min-width: 96px;
		text-align: center;
	}

</style>