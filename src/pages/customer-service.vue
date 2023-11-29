<template>
    <div class="chat-box">
        <a-card class="chat-card">
            <a-menu id="dddddd" class="contact-list" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys"
                style="width: 256px" mode="inline" :items="items" @click="handleClick">
            </a-menu>
            <div class="chat-content">
                <div class="chat-message">
                    <div class="chat-item" :class="{ 'chat-item-out': item.flow === 'out' }"
                        v-for="(item, index) in chatLogs" :key="index">
                        <div class="chat-item-content">
                            <!-- <div :class="{
                                triangle: item.flow === 'in',
                                triangle_tow: item.flow !== 'in',
                            }"></div>
                            <div :class="{
                                triangle: item.flow === 'in',
                                fill_tow: item.flow !== 'in',
                            }"></div> -->
                            {{ item.text }}
                        </div>
                    </div>
                </div>
                <a-textarea class="textarea" v-model:value="value2" placeholder="回车发送消息"
                    :auto-size="{ minRows: 2, maxRows: 5 }" />
            </div>
        </a-card>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch, VueElement } from 'vue';
import type { MenuProps, ItemType } from 'ant-design-vue';

const chatLogs = ref([
    {
        text: "111",
        flow: "in"
    },
    {
        text: "222",
        flow: "in"
    },
    {
        text: "333",
        flow: "out"
    }
])

const selectedKeys = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);

function getItem(
    label: VueElement | string,
    key: string,
    icon?: any,
    children?: ItemType[],
    type?: 'group',
): ItemType {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as ItemType;
}

const items: ItemType[] = reactive([

    getItem('Group', 'grp', null, [
        getItem('Option 1', '1'),
        getItem('Option 2', '2')], 'group'),
]);

const handleClick: MenuProps['onClick'] = e => {
    console.log('click', e);
};

watch(openKeys, val => {
    console.log('openKeys', val);
});

const value2 = ref<string>('');
</script>

<style scoped lang="scss">
.chat-item {
    display: flex;
}

.chat-item-content {
    position: relative;
    padding: 10px 6px;
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 5px;
    word-break: break-all;
    background-color: skyblue;
    color: white
}

.chat-item-out {
    justify-content: flex-end;

    .chat-item-content {
        margin-right: 10px;
    }
}

.chat-box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    :deep(.ant-card-body) {
        height: 100%;
        display: flex;
        align-items: center;
    }
}

.chat-card {
    width: 100%;
    height: 100%;
}

.contact-list {
    height: 100%;
    border: 1px solid #f0f0f0;
}

.chat-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;

    .chat-message {
        flex: 1;
        padding: 20px 0;
        overflow-y: scroll;
    }

    .textarea {
        border-radius: 5px;
    }
}

.triangle,
.triangle_tow {
    position: absolute;
    top: 15px;
    border-width: 10px;
    border-style: solid;
}

.fill_tow {
    position: absolute;
    top: 15px;
    border-width: 10px;
    border-style: solid
}
</style>