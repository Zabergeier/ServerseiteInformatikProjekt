import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\mqttTokenController::token
 * @see app/Http/Controllers/mqttTokenController.php:14
 * @route '/mqtt/token'
 */
export const token = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: token.url(options),
    method: 'post',
})

token.definition = {
    methods: ["post"],
    url: '/mqtt/token',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\mqttTokenController::token
 * @see app/Http/Controllers/mqttTokenController.php:14
 * @route '/mqtt/token'
 */
token.url = (options?: RouteQueryOptions) => {
    return token.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\mqttTokenController::token
 * @see app/Http/Controllers/mqttTokenController.php:14
 * @route '/mqtt/token'
 */
token.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: token.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\mqttTokenController::token
 * @see app/Http/Controllers/mqttTokenController.php:14
 * @route '/mqtt/token'
 */
    const tokenForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: token.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\mqttTokenController::token
 * @see app/Http/Controllers/mqttTokenController.php:14
 * @route '/mqtt/token'
 */
        tokenForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: token.url(options),
            method: 'post',
        })
    
    token.form = tokenForm
const mqtt = {
    token: Object.assign(token, token),
}

export default mqtt