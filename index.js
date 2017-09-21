var one={
	template:`<div><article>
			<div v-for="i in list"><router-link to="./eee">特价</router-link></div>
			<div><router-link to="./fff">水果</router-link></div>
			<div><router-link to="./ggg">蔬菜</router-link></div>
			<div><router-link to="./hhh">乳品</router-link></div>
			<div><router-link to="./iii">肉蛋</router-link></div>
			<div><router-link to="./zzz">零食</router-link></div>
		</article>
		<div class="swiper-container swipeOne">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="i in banner"><img :src="i.src"/></div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<router-view></router-view>
		
		<div class="swipe">
			<div style="border-right: 0.05rem solid lightgrey;padding-left: 1rem;display: flex;align-items: center;height: 2rem;padding-right: 0.2rem;"><img src="images/1_38.png"/></div>
			<div class="swiper-container swipeTwo">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="i in tit">{{i.text}}</div>
				</div>
			</div>
		</div>
		<div class="content">
			<h4>
				<img src="images/1_27.png"/><span>每日特价</span><img src="images/1_27.png"/>
			</h4>
			<div class="slide" v-for="i in child">
				<div><img :src="i.src" alt="" /></div>
				<div class="item">
					<h3>{{i.h2}}</h3>
					<p>{{i.p}}</p>
					<img :src="i.img" alt="" />
					<h6>{{i.money}}</h6>
					<h5>冰爽</h5>
				</div>
			</div>
		</div>
		<div style="height: 2rem;"></div>
		</div>
		`,
		data(){
			return{
				navt:[],
				banner:[],
				nav:[],
				tit:[],
				child:[]
			}
		},
		beforeCreate(){
			axios.get("http://localhost:6565/trommer.json").then((con)=>{
				console.log(con.data)
				this.navt=con.data.navt
				this.banner=con.data.banner
				this.nav=con.data.nav
				this.tit=con.data.tit
				this.child=con.data.child
			})
			setTimeout(function(){
				var swipeOne=new Swiper(".swipeOne",{
				autoplay:1000,
				pagination:".swiper-pagination"
				})
				var Stwo=new Swiper(".swipeTwo",{
					autoplay:1000,
					direction:"vertical"
				})
			},100)
			
		}
}
var two={
	template:"<h1>分页1</h1>"
}
var three={
	template:"<h1>分页2</h1>"
}
var four={
	template:"<h1>分页3</h1>"
}
var eee={
	template:``
}
var fff={
	template:"<h1>分页2</h1>"
}
var ggg={
	template:"<h1>分页3</h1>"
}
var hhh={
	template:"<h1>分页4</h1>"
}
var iii={
	template:"<h1>分页5</h1>"
}
var zzz={
	template:"<h1>分页6</h1>"
}
var myroute=new VueRouter({
	routes:[
		{
			path:"/aaa",
			component:one,
			children:[
				{
					path:"/eee",
					component:eee
				},
				{
					path:"/fff",
					component:fff
				},
				{
					path:"/ggg",
					component:ggg
				},
				{
					path:"/hhh",
					component:hhh
				},
				{
					path:"/iii",
					component:iii
				},
				{
					path:"/zzz",
					component:zzz
				},
				{
					path:"*",
					redirect:"/eee"
				}
			]
		},
		{
			path:"/bbb",
			component:two
		},
		{
			path:"/ccc",
			component:three
		},
		{
			path:"/ddd",
			component:four
		},
		{
			path:"*",
			redirect:"/aaa"
		}
	]
})
   var myVue=new Vue({
   	el:"#box",
	router:myroute,
	data:{
		msg:"asd"
	}
})
//Vue.component({
//	router:myroute,
//	data:{
//		msg:"asd"
//	}
//})
