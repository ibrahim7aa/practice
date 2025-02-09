<template>
    <div class="flex justify-center items-center h-screen bg-gray-950 font-mono">
      <div class="relative pb-6 w-[40rem] bg-gray-900 text-white rounded-lg shadow-lg">
        <!-- Top bar -->
        <div class="flex items-center px-4 py-3 bg-gray-800 rounded-t-lg">
          <div class="flex space-x-3">
            <span class="w-4 h-4 bg-red-500 rounded-full"></span>
            <span class="w-4 h-4 bg-yellow-500 rounded-full"></span>
            <span class="w-4 h-4 bg-green-500 rounded-full"></span>
          </div>
          <h1 class="text-gray-500 ml-52 text-xl">Bash</h1>
          <button 
            @click="copyText"  
            class="ml-auto flex items-center space-x-2 px-4 py-2 text-base rounded transition"
          >
            <Copy class="w-6 h-6 text-gray-500 cursor-pointer" />
            <span v-if="copied" class="text-green-400 text-sm">Copied</span>
          </button>
        </div>
        <pre class="p-6 overflow-auto text-lg">
          <code class="whitespace-pre-wrap">{{ displayedText }}</code>
        </pre>
        <div class="flex items-center justify-between mx-auto mt-4 w-3/4">
          <div class="relative h-8 w-full overflow-hidden">
            <div 
              class="h-full bg-green-500 transition-all duration-100 ease-in-out" 
              :style="{ width: progress + '%' }"
            ></div>
          </div>
          <span class="text-lg font-bold ml-4">{{ progress }}%</span>   
        </div>
        <div class="flex justify-end mt-4 px-6">
          <button 
            @click="restart"
            class="hover:text-blue-700 text-gray-400 px-4 py-2 text-base rounded transition"
          >
            Restart
          </button>
        </div>
      </div>
     </div>
   </template>
   
  <script>
  import { Copy } from 'lucide-vue-next';
  
  export default {
    components: { Copy }, 
    data() {
      return {
        fullText: `$ pip install "fastapi[standard]"`, 
        displayedText: "", 
        index: 0, 
        progress: 0, 
        copied: false,
        intervalId: null, 
      };
    },
    methods: {
      startTyping() {
        this.displayedText = ""; 
        this.index = 0;
        this.typeNextCharacter();
      },
      typeNextCharacter() {
        if (this.index < this.fullText.length) {
          this.displayedText += this.fullText[this.index]; 
          this.index++;
          setTimeout(this.typeNextCharacter, 100); 
        } else {
          this.startDownload();
        }
      },
      startDownload() {
        this.progress = 0;
        clearInterval(this.intervalId);
        this.intervalId = setInterval(() => {
          if (this.progress < 100) {
            this.progress += 1;
          } else {
            clearInterval(this.intervalId);
          }
        }, 50);
      },
      copyText() {
        navigator.clipboard.writeText(this.fullText);
        this.copied = true; 
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      },
      restart() {
        clearInterval(this.intervalId);
        this.progress = 0;
        this.startTyping();
      }
    },
    mounted() {
      this.startTyping();
     }
  };
  </script>
  
   <style scoped>
  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  </style>
  