<script setup lang="ts">
</script>

<template>
    <header class="fixed-top">
        <div class="d-flex align-items-center justify-content-start px-5 py-3 lh-sm">
            <div class="company-name">Cinema-vue</div>
        </div>
    </header>
    <main>
        <RouterView></RouterView>
    </main>
    <footer class="fixed-bottom">
        <div class="d-flex flex-column align-items-center justify-content-center px-5 py-3 lh-sm">
        <div class="company-name">Cinema-vue</div>
            <div>Онлайн-кинотеатр</div>
        <div>© 2026</div>
        </div>
    </footer>
</template>

<style scoped>
.company-name {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2rem;
    font-weight: 800;
}
</style>
