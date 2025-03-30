<template>
  <UError
    :clear="{
      color: 'primary',
      size: 'xl',
      class: 'rounded-full'
    }"
    :error="{
      statusCode: 404,
      statusMessage: 'Page not found',
      message: 'The page you are looking for does not exist.'
    }"/>
</template>