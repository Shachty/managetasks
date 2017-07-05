package com.taskmanager;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;

/**
 * Created by Daniel on 05.07.2017.
 */
public class CustomJsonDateDeserializer extends JsonDeserializer<LocalDateTime> {

    @Override
    public LocalDateTime deserialize(JsonParser jsonparser, DeserializationContext deserializationcontext) throws IOException {

        String string = jsonparser.getText();

        if(string.length() > 20) {
            ZonedDateTime zonedDateTime = ZonedDateTime.parse(string);
            return zonedDateTime.toLocalDateTime();
        }

        return LocalDateTime.parse(string);
    }
}
