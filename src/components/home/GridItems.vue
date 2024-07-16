<template>
     <div class="card-body m-4  mt-0 col-12 d-flex flex-column">
            <div class="col-12 d-flex ">
                <div class="card-body card m-2 col-2 shadow-sm ">
                    <div class="text-center">
                        <span class="material-icons">pending_actions</span>
                        <div>Registro do Ponto</div>
                    </div>
                </div>
                <div class="card-body card m-2 col-2 shadow-sm ">
                    <div class="text-center">
                        <span class="material-icons">manage_accounts</span>
                        <div>Solicitar Registro Manual</div>
                    </div>
                </div>
                <div class="card-body card m-2 col-2 shadow-sm ">
                    <div class="text-center">
                        <span class="material-icons">watch_later</span>
                        <div>Espelho de Ponto</div>
                    </div>
                </div>
                <div class="card-body card m-2 col-2 shadow-sm ">
                    <div class="text-center">
                        <span class="material-icons">article</span>
                        <div>Saldo de Banco de Horas</div>
                    </div>
                </div>
                <div class="card-body card m-2 col-2 shadow-sm ">
                    <div class="text-center">
                        <span class="material-icons">houseboat</span>
                        <div>Férias</div>
                    </div>
                </div>
            </div>
            <div class="col-12 d-flex">
                <div class="card-body card m-2 col-2 shadow-sm ">
                    <div class="text-center">
                        <span class="material-icons">attach_money</span>
                        <div>Demostrativo de Pagamento</div>
                    </div>
                </div>
                
                <div class="card-body card m-2 col-2 shadow-sm ">
                    <router-link class="dropdown-item" to="/info">
                    <div class="text-center">
                        <span class="material-icons">manage_accounts</span>
                        <div>Colaborador</div>
                    </div>
                </router-link>
                </div>
            
                <div class="colaborador card-body card m-2 col-2 shadow-sm ">
                    <div class="text-center">
                        <span class="material-icons">folder_shared</span>
                        <div>Alteração de Dados Pessoais</div>
                    </div>
                </div>
                <div class="card-body card m-2 col-2 shadow-sm ">
                    <div class="text-center">
                        <span class="material-icons">insights</span>
                        <div>Performance e Desenvolvimento</div>
                    </div>
                </div>
                <div class="card-body card m-2 col-2 hover-bg shadow-sm ">
                    <div class="text-center">
                        <span class="material-icons">insights</span>
                        <div class="card-text">Performance e Desenvolvimento </div>
                    </div>
                </div>
            </div>
        </div>
</template>


<script>

export default{

    name:'GridItems',
    
    data() {
        return {
            
        }
    },
}
</script>