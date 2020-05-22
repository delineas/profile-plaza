<template>
  <div class="flex flex-col flex-1 justify-center">
    <div class="flex justify-center">
      <div class="flex flex-col w-1/6">
        <div class="text-6xl text-center">1</div>
        <div class="p-4 text-xl text-center">Haz un fork del repositorio</div>
      </div>

      <div class="flex flex-col w-1/6">
        <div class="text-6xl text-center">2</div>
        <div class="p-4 text-xl text-center">
          Modifica los perfiles JSON ya existentes para añadir el tuyo
        </div>
      </div>

      <div class="flex flex-col w-1/6">
        <div class="text-6xl text-center">3</div>
        <div class="p-4 text-xl text-center">
          Lanza una Pull Resquest contra el repositorio original
        </div>
      </div>

      <div class="flex flex-col w-1/6">
        <div class="text-6xl text-center">4</div>
        <div class="p-4 text-xl text-center">
          Espera a que tu perfil sea aprobado por los administradores
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
};
</script>
