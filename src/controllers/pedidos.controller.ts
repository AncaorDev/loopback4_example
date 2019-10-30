import { Request, ResponseObject, RestBindings, get } from "@loopback/rest";
import { inject } from "@loopback/core";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

/**
 * OpenAPI response for pedidos()
 */

const PEDIDOS_RESPONSE: ResponseObject = {
	description: 'Pedidos response',
	content: {
		'application/json': {
			schema: {
				"type": "object",
				"properties": {
					"success": {
						"type": "boolean"
					},
					"data": {
						"type": "array",
						"items": [{
							"type": "object",
							"properties": {
								"id_work": {
									"type": "number"
								},
								"name_work": {
									"type": "string"
								},
								"people_contact_name": {
									"type": "string"
								},
								"people_contact_phone": {
									"type": "string"
								},
								"orders": {
									"type": "array",
									"items": [{
										"type": "object",
										"properties": {
											"date": {
												"type": "string"
											},
											"product": {
												"type": "string"
											},
											"hour": {
												"type": "string"
											},
											"frecuency": {
												"type": "string"
											},
											"volumen": {
												"type": "string"
											},
											"supply": {
												"type": "string"
											},
											"structure": {
												"type": "string"
											},
											"observation": {
												"type": "string"
											},
											"editing": {
												"type": "string"
											}
										}
									}]
								}
							}
						}]
					},
					"url": {
						"type": "string"
					}
				}
			}
		}
	}
};


export class PedidosController {
	constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {

	}
	// Map to `GET /pedidos`
	@get('/pedidos', {
		responses: {
			'200': PEDIDOS_RESPONSE,
		},
	})
	pedidos(): object {
		// Reply with a greeting, the current time, the url, and request headers
		return {
			success: true,
			data: [{
				id_work: 1,
				name_work: 'RESIDENCIAL EL PARQUE II REPALSA',
				people_contact_name: 'PEDRO PÉREZ',
				people_contact_phone: '962525191',
				orders: [
					{
						date: '29/10/2019',
						product: '210-MS-H67-A5',
						hour: '18:35',
						frecuency: '@30 min',
						volumen: '115 m3',
						supply: 'Bombeado',
						structure: 'Fuste (tanque elevado)',
						observation: 'Praesent augue leo, interdum sit amet varius eget, facilisis a lectus. Duis eu est euismod, imperdiet nisl nec, dapibus ortor.',
						editing: '05:35'
					},
					{
						date: '29/10/2019',
						product: '210-MS-H67-A5',
						hour: '18:35',
						frecuency: '@30 min',
						volumen: '115 m3',
						supply: 'Bombeado',
						structure: 'Fuste (tanque elevado)',
						observation: 'Praesent augue leo, interdum sit amet varius eget, facilisis a lectus. Duis eu est euismod, imperdiet nisl nec, dapibus ortor.',
						editing: '05:35'
					},
					{
						date: '29/10/2019',
						product: '210-MS-H67-A5',
						hour: '18:35',
						frecuency: '@30 min',
						volumen: '115 m3',
						supply: 'Bombeado',
						structure: 'Fuste (tanque elevado)',
						observation: 'Praesent augue leo, interdum sit amet varius eget, facilisis a lectus. Duis eu est euismod, imperdiet nisl nec, dapibus ortor.',
						editing: '05:35'
					}
				]
			},
			{
				id_work: 2,
				name_work: 'RESIDENCIAL EL PARQUE II REPALSA',
				people_contact_name: 'PEDRO PÉREZ',
				people_contact_phone: '962525191',
				orders: [
					{
						date: '29/10/2019',
						product: '210-MS-H67-A5',
						hour: '18:35',
						frecuency: '@30 min',
						volumen: '115 m3',
						supply: 'Bombeado',
						structure: 'Fuste (tanque elevado)',
						observation: 'Praesent augue leo, interdum sit amet varius eget, facilisis a lectus. Duis eu est euismod, imperdiet nisl nec, dapibus ortor.',
						editing: '05:35'
					}
				]
			},
			{
				id_work: 3,
				name_work: 'RESIDENCIAL EL PARQUE II REPALSA',
				people_contact_name: 'PEDRO PÉREZ',
				people_contact_phone: '962525191',
				orders: [
					{
						date: '29/10/2019',
						product: '210-MS-H67-A5',
						hour: '18:35',
						frecuency: '@30 min',
						volumen: '115 m3',
						supply: 'Bombeado',
						structure: 'Fuste (tanque elevado)',
						observation: 'Praesent augue leo, interdum sit amet varius eget, facilisis a lectus. Duis eu est euismod, imperdiet nisl nec, dapibus ortor.',
						editing: '05:35'
					},
					{
						date: '29/10/2019',
						product: '210-MS-H67-A5',
						hour: '18:35',
						frecuency: '@30 min',
						volumen: '115 m3',
						supply: 'Bombeado',
						structure: 'Fuste (tanque elevado)',
						observation: 'Praesent augue leo, interdum sit amet varius eget, facilisis a lectus. Duis eu est euismod, imperdiet nisl nec, dapibus ortor.',
						editing: '05:35'
					},
					{
						date: '29/10/2019',
						product: '210-MS-H67-A5',
						hour: '18:35',
						frecuency: '@30 min',
						volumen: '115 m3',
						supply: 'Bombeado',
						structure: 'Fuste (tanque elevado)',
						observation: 'Praesent augue leo, interdum sit amet varius eget, facilisis a lectus. Duis eu est euismod, imperdiet nisl nec, dapibus ortor.',
						editing: '05:35'
					},
					{
						date: '29/10/2019',
						product: '210-MS-H67-A5',
						hour: '18:35',
						frecuency: '@30 min',
						volumen: '115 m3',
						supply: 'Bombeado',
						structure: 'Fuste (tanque elevado)',
						observation: 'Praesent augue leo, interdum sit amet varius eget, facilisis a lectus. Duis eu est euismod, imperdiet nisl nec, dapibus ortor.',
						editing: '05:35'
					}
				]
			}],
			url: this.req.url,
			headers: Object.assign({}, this.req.headers),
		};
	}
}
