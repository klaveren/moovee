<template>
  <div>
    <Menu />

    <Content>
      <template #default>
        <slot />
      </template>
    </Content>

    <Footer />
  </div>
</template>
