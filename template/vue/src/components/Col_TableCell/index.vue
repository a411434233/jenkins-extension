<template>
  <div class="Col_TableCell-wrapper">
    <div
      :class="['group',{ 'abs':copyClass}]"
      v-for="(group,groupIndex) in _layout"
      :key="groupIndex"
    >
      <div v-for="item in group" :key="item.id">
        <div :class="['item-main',{ 'abs':copyClass}]" v-if="item !== 'copy' && !item.hide">
          <span :class="[{'label':item.label},{'noLabel':!item.label}]">{{item.label}}</span>
          <span>{{item.value}}</span>
          <div class="copy-btn copy-btn-abs" v-if="item.copy" @click="handle_copy(group)">复制</div>
        </div>
        <div class="copy-btn copy-btn-abs" v-if="item == 'copy'" @click="handle_copy(group)">复制</div>
      </div>
    </div>
  </div>
</template>

<script>
import data from './data'
import methods from './methods'
import { MIX_ColCellAnalysis } from '@/mixin/tableCell/colTableCell_analysis'

export default {
  props: {},
  data,
  methods,
  mixins: [MIX_ColCellAnalysis],
  components: {},
  watch: {},
  computed: {},
  // ------------------------------------------------------------------
  // pragma mark - Life Cycle(生命周期)
  // ------------------------------------------------------------------
  created() {
    this.createdInit();
  },
  mounted() {
    this.mountedInit();
  }
};
</script>
<style lang="scss" src="./index.scss" scoped></style>
