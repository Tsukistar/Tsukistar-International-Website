<template>
	<el-container>
		<transition name="fade">
			<el-header v-if="showHeaderFooter">
				<Header />
			</el-header>
		</transition>
		<el-main>
			<router-view v-slot="{ Component }">
				<transition :name="transitionName" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
		</el-main>
		<transition name="fade">
			<el-footer v-if="showHeaderFooter">
				<Footer />
			</el-footer>
		</transition>
		<div class="mouse-scroll-img" v-if="showHeaderFooter">
			<img class="mouse" src="/assets/image/HomeView/PhMouseSimple.svg" alt="mouse SVG">
			<img class="arrow-down" src="/assets/image/HomeView/PhArrowDownLight.svg" alt="Arrow SVG">
		</div>
	</el-container>
</template>
  
<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
const routes = ['/', '/doing', '/gallery', '/about']
const router = useRouter()
const showHeaderFooter = ref(false)

watch(() => route.path, (newPath: string) => {
	if (!showHeaderFooter.value) {
		setTimeout(() => {
			showHeaderFooter.value = newPath !== '/';
		}, 1000);
	}
	else {
		showHeaderFooter.value = newPath !== '/';
	}
});

// Mouse scroll event
let lastScrollTime = 0;
const throttleTime = 500;

const transitionName = ref('slide-fade-down');

const handleScroll = (event: WheelEvent) => {
	const currentRouteIndex = routes.indexOf(router.currentRoute.value.path);
	const currentTime = new Date().getTime();

	if (currentTime - lastScrollTime > throttleTime) {
		if (event.deltaY > 0 && currentRouteIndex < routes.length - 1) {
			// Scroll down
			transitionName.value = 'slide-fade-up';
			router.push(routes[currentRouteIndex + 1]);
		} else if (event.deltaY < 0 && currentRouteIndex > 0) {
			// Scroll up
			transitionName.value = 'slide-fade-down';
			router.push(routes[currentRouteIndex - 1]);
		}

		lastScrollTime = currentTime;
	}
};

// Touch event
let isDragging = false;
let startY = 0;

const handleTouchStart = (event: TouchEvent) => {
	isDragging = true;
	startY = event.touches[0].clientY;
};

const handleTouchMove = (event: TouchEvent) => {
	if (!isDragging) return;

	const currentRouteIndex = routes.indexOf(router.currentRoute.value.path);
	const currentTime = new Date().getTime();

	if (currentTime - lastScrollTime > throttleTime) {
		if (event.touches[0].clientY < startY && currentRouteIndex < routes.length - 1) {
			// Swipe up
			transitionName.value = 'slide-fade-up';
			router.push(routes[currentRouteIndex + 1]);
		} else if (event.touches[0].clientY > startY && currentRouteIndex > 0) {
			// Swipe down
			transitionName.value = 'slide-fade-down';
			router.push(routes[currentRouteIndex - 1]);
		}

		lastScrollTime = currentTime;
	}

	startY = event.touches[0].clientY;
};

const handleTouchEnd = (event: TouchEvent) => {
	isDragging = false;
};

onMounted(() => {
	window.addEventListener('wheel', handleScroll);
	window.addEventListener('touchstart', handleTouchStart);
	window.addEventListener('touchmove', handleTouchMove);
	window.addEventListener('touchend', handleTouchEnd);
})

onUnmounted(() => {
	window.removeEventListener('wheel', handleScroll);
	window.addEventListener('mousedown', handleMouseDown);
	window.addEventListener('mousemove', handleMouseMove);
	window.addEventListener('mouseup', handleMouseUp);
	window.addEventListener('touchstart', handleTouchStart);
	window.addEventListener('touchmove', handleTouchMove);
	window.addEventListener('touchend', handleTouchEnd);
})

</script>

<style scoped>
.el-header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1000;
}

.el-main {
	padding: 0;
	margin: 0;
	overflow: auto;
}

.el-main::-webkit-scrollbar {
	display: none;
}

.el-footer {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1000;
	height: 30px;
	text-align: center;
	line-height: 30px;
}

.mouse-scroll-img {
	display: flex;
	flex-direction: column;
	position: fixed;
	right: 15px;
	bottom: 15px;
	z-index: 1000;
}

.mouse {
	width: 30px;
	margin-top: 20px;
	margin-bottom: 10px;
}

.arrow-down {
	width: 30px;
	animation: fadeInOut 2s infinite;
}

@keyframes fadeInOut {
	0% {
		opacity: 0;
		transform: translateY(-20px);
	}

	50% {
		opacity: 1;
		transform: translateY(0);
	}

	100% {
		opacity: 0;
		transform: translateY(20px);
	}
}

.slide-fade-down-enter-active {
	transition: all .3s ease;
}

.slide-fade-down-leave-active {
	transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-down-enter,
.slide-fade-down-leave-to {
	transform: translateY(100px);
	opacity: 0;
}

.slide-fade-up-enter-active {
	transition: all .3s ease;
}

.slide-fade-up-leave-active {
	transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-up-enter,
.slide-fade-up-leave-to {
	transform: translateY(-100px);
	opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
