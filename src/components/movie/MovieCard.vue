<script setup lang="ts">
import SessionCard from '../session/SessionCard.vue';

</script>
<template>
    <div>
        <div class="d-flex gap-3">
            <img class="mx-auto object-fit-cover w-25" src="/uploads/posters/inception.webp" alt="Начало">
            <div class="w-75 d-flex flex-column gap-2">
                <p class="lh-1 mb-0 text-uppercase fw-bolder fs-1 text-decoration-none">Начало</p>
                <p class="mb-0">Вор, крадущий секреты из снов, получает задание внедрить идею в разум бизнесмена. Но чем
                    глубже он погружается, тем сильнее рискует потерять связь с реальностью.</p>
                <div class="d-flex gap-3">
                    <p class="mb-0">
                        <span>12+</span>
                        <span class="divider-dot"></span>
                        <span>Фантастика</span>
                        <span class="divider-dot"></span>
                        <span>Режиссер</span>
                    </p>
                </div>
                <div class="d-flex gap-3 overflow-x-scroll scroll-hidden mt-auto">
                    <session-card></session-card>
                    <session-card></session-card>
                    <session-card></session-card>
                    <session-card></session-card>
                </div>
            </div>
        </div>
    </div>
</template>