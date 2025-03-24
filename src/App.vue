<template>
	<div>
	  <!-- 预载页：当页面未加载完成时显示 -->
	  <Preloader v-if="!isPageLoaded" @loaded="handleLoaded" />
  
	  <!-- 主内容：加载完成后显示 -->
	  <el-container v-else>
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
	</div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch, onMounted, onUnmounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Preloader from './views/Preloader.vue'; // 引入 Preloader 组件
  import { useScreenOrientationStore } from './stores';
  
  // 路由相关
  const route = useRoute();
  const routes = ['/', '/doing', '/gallery', '/about'];
  const router = useRouter();
  const showHeaderFooter = ref(false);
  
  // 控制页面加载状态
  const isPageLoaded = ref(false);
  
  // 监听路由变化，控制 Header 和 Footer 的显示
  watch(
	() => route.path,
	(newPath: string) => {
	  if (!showHeaderFooter.value) {
		setTimeout(() => {
		  showHeaderFooter.value = newPath !== '/';
		}, 1000);
	  } else {
		showHeaderFooter.value = newPath !== '/';
	  }
	}
  );
  
  // 鼠标滚动事件
  let lastScrollTime = 0;
  const throttleTime = 500;
  const transitionName = ref('slide-fade-down');
  
  const handleScroll = (event: WheelEvent) => {
	const currentRouteIndex = routes.indexOf(router.currentRoute.value.path);
	const currentTime = new Date().getTime();
  
	if (currentTime - lastScrollTime > throttleTime) {
	  if (event.deltaY > 0 && currentRouteIndex < routes.length - 1) {
		// 向下滚动
		transitionName.value = 'slide-fade-up';
		router.push(routes[currentRouteIndex + 1]);
	  } else if (event.deltaY < 0 && currentRouteIndex > 0) {
		// 向上滚动
		transitionName.value = 'slide-fade-down';
		router.push(routes[currentRouteIndex - 1]);
	  }
  
	  lastScrollTime = currentTime;
	}
  };
  
  // 触摸事件
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
		// 向上滑动
		transitionName.value = 'slide-fade-up';
		router.push(routes[currentRouteIndex + 1]);
	  } else if (event.touches[0].clientY > startY && currentRouteIndex > 0) {
		// 向下滑动
		transitionName.value = 'slide-fade-down';
		router.push(routes[currentRouteIndex - 1]);
	  }
  
	  lastScrollTime = currentTime;
	}
  
	startY = event.touches[0].clientY;
  };
  
  const handleTouchEnd = () => {
	isDragging = false;
  };
  
  // 屏幕方向
  const screenStore = useScreenOrientationStore();
  
  // 加载完成后的回调
  const handleLoaded = () => {
	isPageLoaded.value = true;
  };
  
  // 组件生命周期
  onMounted(() => {
	console.log('screenStore:', screenStore.orientation);
	window.addEventListener('wheel', handleScroll);
	window.addEventListener('touchstart', handleTouchStart);
	window.addEventListener('touchmove', handleTouchMove);
	window.addEventListener('touchend', handleTouchEnd);
  });
  
  onUnmounted(() => {
	window.removeEventListener('wheel', handleScroll);
	window.removeEventListener('touchstart', handleTouchStart);
	window.removeEventListener('touchmove', handleTouchMove);
	window.removeEventListener('touchend', handleTouchEnd);
  });
  </script>
  
  <style scoped>
  /* 确保 Preloader 覆盖整个页面 */
  :deep(.preloader) {
	z-index: 9999; /* 确保 Preloader 在最上层 */
  }
  
  /* 以下样式保持不变 */
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
	transition: all 0.3s ease;
  }
  
  .slide-fade-down-leave-active {
	transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  
  .slide-fade-down-enter,
  .slide-fade-down-leave-to {
	transform: translateY(100vh);
	opacity: 0;
  }
  
  .slide-fade-up-enter-active {
	transition: all 0.3s ease;
  }
  
  .slide-fade-up-leave-active {
	transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  
  .slide-fade-up-enter,
  .slide-fade-up-leave-to {
	transform: translateY(-100vh);
	opacity: 0;
  }
  
  .fade-enter-active,
  .fade-leave-active {
	transition: opacity 0.5s;
  }
  
  .fade-enter,
  .fade-leave-to {
	opacity: 0;
  }
  
  @media (min-width: 1024px) {}
  
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
	.el-header {
	  padding: 0;
	}
  }
  
  @media only screen and (max-device-width: 480px) {
	.el-header {
	  padding: 0;
	}
  
	.el-footer {
	  height: 60px;
	}
  
	.mouse-scroll-img {
	  display: none;
	}
  }
  </style>