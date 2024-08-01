export default defineEventHandler(async (event) => {
  try {
    const {
      fooSecretKey,
      public: { fooUrl }
    } = useRuntimeConfig(event)

    return { status: 'ok' }
  } catch (e) {
    console.log('--- error: ', e)

    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong with the API request.'
    })
  }
})
