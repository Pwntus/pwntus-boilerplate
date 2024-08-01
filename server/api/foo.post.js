export default defineEventHandler(async (event) => {
  try {
    const { foo } = await readBody(event)

    return { status: 'ok' }
  } catch (e) {
    console.log('--- error (api/foo): ', e)

    return {
      error: e.message
    }
  }
})
