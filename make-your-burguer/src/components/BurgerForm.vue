<template>
  <div>
    <p>Componente de Mensagem</p>
    <div>
      <form id="burger-form">
        <div class="input-container">
          <label for="nome">Nome do cliente</label>
          <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite seu nome">
        </div>
        <div class="input-container">
          <label for="pao">Escolha o tipo do pão do seu Burger:</label>
          <select name="pao" id="pao" v-model="pao">
            <option value="">Selecione o tipo do pão</option>
            <option value="australiano">Australiano</option>
          </select>
        </div>
        <div class="input-container">
          <label for="carne">Escolha a carne do seu Burger:</label>
          <select name="carne" id="carne" v-model="carne">
            <option value="">Selecione o tipo de carne</option>
            <option value="maminha">Maminha</option>
          </select>
        </div>
        <div class="input-container">
          <label for="opcionais">Selecione os opcionais:</label>
          <input type="checkbox" name="opcionais" v-model="opcionais" value="salame">
          <span>Salame</span>
        </div>
        <div class="input-container">
          <input type="submit" class="submit-btn" value="Criar meu Burger!">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "BurgerForm"
}
</script>

<style scoped>
  #burger-form {
    max-width: 400px;
    margin: 0 auto;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    margin-bottom:  15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #FCBA03;
  }

  #opcionais-container {
    flex-direction: row;
    flex-wrap: wrap;
  }

</style>