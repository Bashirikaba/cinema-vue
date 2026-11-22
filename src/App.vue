<script setup lang="ts">
</script>

<template>
    <div class="d-grid min-vh-100" style="grid-template-rows: auto 1fr auto;">
        <header class="sticky-top px-5 bg-body">
            <div class="d-flex align-items-center justify-content-start py-3 lh-sm">
                <div class="company-name">Cinema-vue</div>
            </div>
        </header>
        <main class="px-5">
            <RouterView></RouterView>
        </main>
        <footer class="px-5 bg-body">
            <div class="d-flex flex-column align-items-center justify-content-center py-3 lh-sm">
                <div class="company-name">Cinema-vue</div>
                <div>Онлайн-кинотеатр</div>
                <div>© 2026</div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
.company-name {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2rem;
    font-weight: 800;
}
</style>
