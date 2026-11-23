<script setup lang="ts"></script>
<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-5">
            <div class="card border-0">
                <div class="card-body px-3 py-0">

                    <div class="mb-2">
                        <input type="text" class="form-control" id="movie-title"
                               placeholder="Введите название фильма">
                    </div>

                    <div class="row g-2">
                        <div class="col-12 col-md-6">
                            <div class="input-group input-group-sm">
                                <select name="ages" id="movie-genre-select" class="form-select p-2">
                                    <option value="">Выберите жанр</option>
                                    <option value="action">Боевик</option>
                                    <option value="comedy">Комедия</option>
                                    <option value="drama">Драма</option>
                                    <option value="fantasy">Фантастика</option>
                                    <option value="horror">Ужасы</option>
                                </select>

                            </div>
                        </div>

                        <div class="col-12 col-md-6">
                            <div class="d-flex align-items-center gap-2">
                                <div class="btn-group btn-group-sm flex-grow-1" role="group"
                                     aria-label="Возрастной рейтинг" id="movie-ages-group">
                                    <input type="radio" class="btn-check" name="movie-ages" id="movie-ages-0" autocomplete="off">
                                    <label class="btn btn-outline-primary" for="movie-ages-0">0+</label>

                                    <input type="radio" class="btn-check" name="movie-ages" id="movie-ages-6" autocomplete="off">
                                    <label class="btn btn-outline-primary" for="movie-ages-6">6+</label>

                                    <input type="radio" class="btn-check" name="movie-ages" id="movie-ages-12" autocomplete="off">
                                    <label class="btn btn-outline-primary" for="movie-ages-12">12+</label>

                                    <input type="radio" class="btn-check" name="movie-ages" id="movie-ages-18" autocomplete="off">
                                    <label class="btn btn-outline-primary" for="movie-ages-18">18+</label>
                                </div>
                            </div>
                        </div>

                        <button class="btn btn-secondary">Сбросить фильтры</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</template>