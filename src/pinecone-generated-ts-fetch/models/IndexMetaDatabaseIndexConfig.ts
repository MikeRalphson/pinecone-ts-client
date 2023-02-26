/* tslint:disable */
/* eslint-disable */
/**
 * Pinecone API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * Contact: support@pinecone.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    ApproximatedConfig,
    instanceOfApproximatedConfig,
    ApproximatedConfigFromJSON,
    ApproximatedConfigFromJSONTyped,
    ApproximatedConfigToJSON,
} from './ApproximatedConfig';

/**
 * @type IndexMetaDatabaseIndexConfig
 * 
 * @export
 */
export type IndexMetaDatabaseIndexConfig = ApproximatedConfig;

export function IndexMetaDatabaseIndexConfigFromJSON(json: any): IndexMetaDatabaseIndexConfig {
    return IndexMetaDatabaseIndexConfigFromJSONTyped(json, false);
}

export function IndexMetaDatabaseIndexConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): IndexMetaDatabaseIndexConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ApproximatedConfigFromJSONTyped(json, true) };
}

export function IndexMetaDatabaseIndexConfigToJSON(value?: IndexMetaDatabaseIndexConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfApproximatedConfig(value)) {
        return ApproximatedConfigToJSON(value as ApproximatedConfig);
    }

    return {};
}

