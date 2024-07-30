<template>
     <div class="loader">
    <div class="loader-dot"></div>
    <div class="loader-dot"></div>
    <div class="loader-dot"></div>
    </div>
</template>
<script>
export default {
name: 'LoaderPage',
}
</script>

<style>

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.loader-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #333;
  margin: 0 10px;
  animation: loader-dot 1.5s infinite ease-in-out;
  animation-delay: calc(0.5s);
}

.loader-dot:nth-child(2) {
  animation-delay: calc(0.5s + 0.25s);
}

.loader-dot:nth-child(3) {
  animation-delay: calc(0.5s + 0.5s);
}

@keyframes loader-dot {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>