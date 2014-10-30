/* Program JS AIML 2.1 implementation
    Based on program AB.
    Copyright (C) 2014 Ángel González

    Copyright (C) 2013 ALICE A.I. Foundation
    Contact: info@alicebot.org

    This library is free software; you can redistribute it and/or
    modify it under the terms of the GNU Library General Public
    License as published by the Free Software Foundation; either
    version 2 of the License, or (at your option) any later version.

    This library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
    Library General Public License for more details.

    You should have received a copy of the GNU Library General Public
    License along with this library; if not, write to the
    Free Software Foundation, Inc., 51 Franklin St, Fifth Floor,
    Boston, MA  02110-1301, USA.
*/

/**
 * Global values for many strings in programJS (programAB)
 */
function MagicStrings() {
    return undefined;
}

// General global strings
MagicStrings.program_name_version = "Program JS 0.0.0 beta -- Á.González AIML 2.1 implementation based on programAB";
MagicStrings.comment = "Added repetition detection.";
MagicStrings.aimlif_split_char = ",";
MagicStrings.default_bot = "alice2";
MagicStrings.default_language = "EN";
MagicStrings.aimlif_split_char_name = "\\#Comma";
MagicStrings.aimlif_file_suffix = ".csv";
MagicStrings.ab_sample_file = "sample.txt";
MagicStrings.text_comment_mark = ";;";
    // <sraix> defaults
MagicStrings.pannous_api_key = "guest";
MagicStrings.pannous_login = "test-user";
MagicStrings.sraix_failed = "SRAIXFAILED";
MagicStrings.repetition_detected = "REPETITIONDETECTED";
MagicStrings.sraix_no_hint = "nohint";
MagicStrings.sraix_event_hint = "event";
MagicStrings.sraix_pic_hint = "pic";
MagicStrings.sraix_shopping_hint = "shopping";
    // AIML files
MagicStrings.unknown_aiml_file = "unknown_aiml_file.aiml";
MagicStrings.deleted_aiml_file = "deleted.aiml";
MagicStrings.learnf_aiml_file = "learnf.aiml";
MagicStrings.null_aiml_file = "null.aiml";
MagicStrings.inappropriate_aiml_file = "inappropriate.aiml";
MagicStrings.profanity_aiml_file = "profanity.aiml";
MagicStrings.insult_aiml_file = "insults.aiml";
MagicStrings.reductions_update_aiml_file = "reductions_update.aiml";
MagicStrings.predicates_aiml_file = "client_profile.aiml";
MagicStrings.update_aiml_file = "update.aiml";
MagicStrings.personality_aiml_file = "personality.aiml";
MagicStrings.sraix_aiml_file = "sraix.aiml";
MagicStrings.oob_aiml_file = "oob.aiml";
MagicStrings.unfinished_aiml_file = "unfinished.aiml";
    // filter responses
MagicStrings.inappropriate_filter = "FILTER INAPPROPRIATE";
MagicStrings.profanity_filter = "FILTER PROFANITY";
MagicStrings.insult_filter = "FILTER INSULT";
    // default templates
MagicStrings.deleted_template = "deleted";
MagicStrings.unfinished_template = "unfinished";
    // AIML defaults
MagicStrings.bad_javascript = "JSFAILED";
MagicStrings.js_enabled = "true";
MagicStrings.unknown_history_item = "unknown";
MagicStrings.default_bot_response = "I have no answer for that.";
MagicStrings.error_bot_response = "Something is wrong with my brain.";
MagicStrings.schedule_error = "I'm unable to schedule that event.";
MagicStrings.system_failed = "Failed to execute system command.";
MagicStrings.default_get = "unknown";
MagicStrings.default_property = "unknown";
MagicStrings.default_map = "unknown";
MagicStrings.default_Customer_id = "unknown";
MagicStrings.default_bot_name = "unknown";
MagicStrings.default_that = "unknown";
MagicStrings.default_topic = "unknown";
MagicStrings.default_list_item = "NIL";
MagicStrings.undefined_triple = "NIL";
MagicStrings.unbound_variable = "unknown";
MagicStrings.template_failed = "Template failed.";
MagicStrings.too_much_recursion = "Too much recursion in AIML";
MagicStrings.too_much_looping = "Too much looping in AIML";
MagicStrings.blank_template = "blank template";
MagicStrings.null_input = "NORESP";
MagicStrings.null_star = "nullstar";
    // sets and maps
MagicStrings.set_member_string = "ISA";
MagicStrings.remote_map_key = "external";
MagicStrings.remote_set_key = "external";
MagicStrings.natural_number_set_name = "number";
MagicStrings.map_successor = "successor";
MagicStrings.map_predecessor = "predecessor";
MagicStrings.map_singular = "singular";
MagicStrings.map_plural = "plural";
    // paths
MagicStrings.root_path = "c:/ab";

MagicStrings.setRootPath = function(newRootPath) {
    root_path = newRootPath;
};

MagicStrings.setRootPathOnHome = function(){
    var newRootPath = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
    MagicStrings.setRootPath(newRootPath);
};

module.exports = MagicStrings;