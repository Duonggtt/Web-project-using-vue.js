<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Tổng',
        items: [{ label: 'Nhân sự', icon: 'pi pi-fw pi-user', to: '/all/employees' },
                { label: 'Phòng ban', icon: 'pi pi-fw pi-clone', to: '/all/departments' },
                { label: 'Ví', icon: 'pi pi-fw pi-wallet', to: '/all/wallet' },
                { label: 'Kho dữ liệu', icon: 'pi pi-fw pi-database', to: '/all/storage' },
        ]
    },
    {
        label: 'MKT',
        items: [
            { label: 'Nhân sự', icon: 'pi pi-fw pi-user', to: '/mkt/employees' },
            { label: 'Kịch bản', icon: 'pi pi-fw pi-slack', to: '/mkt/scenarios' },
            { label: 'Ví', icon: 'pi pi-fw pi-wallet', to: '/mkt/wallet' },
            { label: 'Nhiệm vụ ADS', icon: 'pi pi-fw pi-list', to: '/mkt/ads-tasks' },
            { label: 'Nhiệm vụ Media', icon: 'pi pi-fw pi-list', to: '/mkt/media-tasks' },
        ]
    },
    {
        label: 'Kinh doanh',
        items: [
            { label: 'Nhân sự', icon: 'pi pi-fw pi-user', to: '/business/employees' },
            { label: 'Kịch bản', icon: 'pi pi-fw pi-slack', to: '/business/scenarios' },
            { label: 'Ví', icon: 'pi pi-fw pi-wallet', to: '/business/wallet' },
            { label: 'Nhiệm vụ Tuyển dụng', icon: 'pi pi-fw pi-list', to: '/business/recruit-tasks' },
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
