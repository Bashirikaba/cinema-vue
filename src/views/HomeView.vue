<script lang="ts" setup>
import DateFilter from '@/components/common/DateFilter.vue';
import MovieCard from '@/components/movie/MovieCard.vue';
import MovieFilters from '@/components/movie/MovieFilters.vue';

</script>
<template>
    <div class="d-flex flex-column">
        <movie-filters></movie-filters>
        <hr>
        <date-filter></date-filter>
    </div>
    <hr>
    <div class="d-flex flex-column gap-3 overflow-hidden">
        <movie-card></movie-card>
        <movie-card></movie-card>
        <movie-card></movie-card>
        <movie-card></movie-card>
    </div>
</template>
