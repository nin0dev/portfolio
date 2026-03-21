import { onMounted, onUnmounted, ref } from 'vue'

export default function displayTime() {
  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }
  const formattedTime = ref(new Date().toLocaleTimeString(undefined, timeOptions))
  let timeInterval

  onMounted(() => {
    timeInterval = setInterval(() => {
      formattedTime.value = new Date().toLocaleTimeString(undefined, timeOptions)
    }, 1000)
  })

  onUnmounted(() => clearInterval(timeInterval))

  return { formattedTime }
}
